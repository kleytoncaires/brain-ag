import { useEffect } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from 'styled-components';
import { useDashboardStats, useProducers } from '@shared/hooks';
import { useAppDispatch } from '@/store/hooks';
import { setLoading } from '@producers/store/producers';
import {
  ChartCard,
  ChartTitle,
  ChartsGrid,
  DashboardContainer,
  StatCard,
  StatLabel,
  StatsGrid,
  StatValue,
  Title,
} from './Dashboard.styles';

interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
}

export const Dashboard = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { producers } = useProducers();
  const { stats, farmsByStateData, farmsByCropData, landUseData } = useDashboardStats(producers);

  const COLORS = [
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.success,
    theme.colors.warning,
    theme.colors.orange,
    theme.colors.lightOrange,
    theme.colors.cyan,
    theme.colors.info,
  ];

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  const renderPieChart = (data: ChartData[], title: string) => {
    if (data.length === 0) {
      return (
        <ChartCard>
          <ChartTitle>{title}</ChartTitle>
          <p>Nenhum dado disponível</p>
        </ChartCard>
      );
    }

    return (
      <ChartCard>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    );
  };

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>

      <StatsGrid>
        <StatCard>
          <StatValue>{stats.totalFarms}</StatValue>
          <StatLabel>Total de Fazendas</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.totalHectares.toLocaleString('pt-BR')}</StatValue>
          <StatLabel>Total de Hectares</StatLabel>
        </StatCard>
      </StatsGrid>

      <ChartsGrid>
        {renderPieChart(farmsByStateData, 'Fazendas por Estado')}
        {renderPieChart(farmsByCropData, 'Fazendas por Cultura')}
        {renderPieChart(landUseData, 'Uso do Solo')}
      </ChartsGrid>
    </DashboardContainer>
  );
};
