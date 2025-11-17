import { useProducers } from '@shared/hooks';
import { Button, Card } from '@shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Actions,
  ButtonGroup,
  FarmCard,
  FarmDetail,
  FarmInfo,
  FarmName,
  FarmsList,
  Header,
  PageContainer,
  PageHeader,
  Section,
  SectionTitle,
  Subtitle,
  Title,
} from './FarmsManagement.styles';

export const FarmsManagementPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProducerById, deleteFarm } = useProducers();

  const producer = id ? getProducerById(id) : null;

  if (!producer) {
    return (
      <PageContainer>
        <Title>Produtor não encontrado</Title>
      </PageContainer>
    );
  }

  const handleDelete = (farmId: string) => {
    if (window.confirm('Deseja realmente excluir esta fazenda?')) {
      deleteFarm(producer.id, farmId);
    }
  };

  const handleEdit = (farmId: string) => {
    navigate(`/produtores/${producer.id}/fazendas/editar/${farmId}`);
  };

  const handleAddNew = () => {
    navigate(`/produtores/${producer.id}/fazendas/nova`);
  };

  const handleBack = () => {
    navigate('/produtores');
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>Fazendas de {producer.name}</Title>
        <Subtitle>
          {producer.documentType}: {producer.document}
        </Subtitle>
      </PageHeader>

      <Section>
        <Header>
          <SectionTitle>Fazendas Cadastradas ({producer.farms.length})</SectionTitle>
          <ButtonGroup>
            <Button size="small" onClick={handleAddNew}>
              Adicionar Fazenda
            </Button>
            <Button size="small" variant="secondary" onClick={handleBack}>
              Voltar
            </Button>
          </ButtonGroup>
        </Header>

        {producer.farms.length === 0 ? (
          <Card>
            <p>Nenhuma fazenda cadastrada para este produtor.</p>
            <p>Clique em "Adicionar Fazenda" para cadastrar a primeira.</p>
          </Card>
        ) : (
          <FarmsList>
            {producer.farms.map((farm) => (
              <FarmCard key={farm.id}>
                <FarmInfo>
                  <FarmName>{farm.name}</FarmName>
                  <FarmDetail>
                    {farm.city} - {farm.state}
                  </FarmDetail>
                  <FarmDetail>Área Total: {farm.totalArea} ha</FarmDetail>
                  <FarmDetail>Área Agricultável: {farm.arableArea} ha</FarmDetail>
                  <FarmDetail>Vegetação: {farm.vegetationArea} ha</FarmDetail>
                  <FarmDetail>
                    Culturas: {farm.crops.map((c) => c.name).join(', ') || 'Nenhuma'}
                  </FarmDetail>
                </FarmInfo>
                <Actions>
                  <Button size="small" onClick={() => handleEdit(farm.id)}>
                    Editar
                  </Button>
                  <Button size="small" variant="danger" onClick={() => handleDelete(farm.id)}>
                    Excluir
                  </Button>
                </Actions>
              </FarmCard>
            ))}
          </FarmsList>
        )}
      </Section>
    </PageContainer>
  );
};
