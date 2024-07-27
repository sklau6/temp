/** @jsxImportSource @emotion/react */
import BigNumber from 'bignumber.js';
import { Cell, CellGroup, Notice, Spinner } from 'components';
import { Divider, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'translation';
import { Pool } from 'types';
import { formatCentsToReadableValue } from 'utilities';

import { useGetPools } from 'clients/api';
import PLACEHOLDER_KEY from 'constants/placeholderKey';
import { routes } from 'constants/routing';
import { useAuth } from 'context/AuthContext';

import Table from './Table';
import { useStyles } from './styles';

export interface PoolUiProps {
  pool?: Pool;
}

export const PoolUi: React.FC<PoolUiProps> = ({ pool }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const cells: Cell[] = useMemo(() => {
    const { totalSupplyCents, totalBorrowCents } = (pool?.assets || []).reduce(
      (acc, item) => ({
        totalSupplyCents: acc.totalSupplyCents.plus(item.supplyBalanceCents),
        totalBorrowCents: acc.totalBorrowCents.plus(item.borrowBalanceCents),
      }),
      {
        totalSupplyCents: new BigNumber(0),
        totalBorrowCents: new BigNumber(0),
      },
    );

    return [
      {
        label: t('pool.header.totalSupplyLabel'),
        value: formatCentsToReadableValue({
          value: totalSupplyCents,
        }),
      },
      {
        label: t('pool.header.totalBorrowLabel'),
        value: formatCentsToReadableValue({
          value: totalBorrowCents,
        }),
      },
      {
        label: t('pool.header.availableLiquidityLabel'),
        value: formatCentsToReadableValue({
          value: totalSupplyCents.minus(totalBorrowCents),
        }),
      },
      {
        label: t('pool.header.assetsLabel'),
        value: pool?.assets.length || PLACEHOLDER_KEY,
      },
    ];
  }, [pool]);

  return pool ? (
    <>
      <Typography css={styles.title} variant="h3">
        {pool.name}
      </Typography>
      <CellGroup cells={cells} css={styles.header} />

      {pool.isIsolated && (
        <Notice
          css={styles.isolatedPoolWarning}
          variant="warning"
          description={t('pool.isolatedPoolWarning')}
        />
      )}

      <Table pool={pool} />
      <Divider css={styles.divider} />
    </>
  ) : (
    <Spinner />
  );
};

export type PoolPageProps = RouteComponentProps<{ poolComptrollerAddress: string }>;

const PoolPage: React.FC<PoolPageProps> = ({
  match: {
    params: { poolComptrollerAddress },
  },
}) => {
  const { accountAddress } = useAuth();

  const { data: getPoolData, isLoading: isGetPoolLoading } = useGetPools({
    accountAddress
  });

  // Redirect to Dashboard page if pool Comptroller address is incorrect
  if (!isGetPoolLoading && !getPoolData?.pools) {
    <Redirect to={routes.dashboard.path} />;
  }

  return getPoolData?.pools.map(pool => <PoolUi pool={pool} />);
};

export default PoolPage;
