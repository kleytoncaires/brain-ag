import type { Farm, FarmFormData } from '@/types';
import { FarmForm } from '@producers/components';
import { useProducers } from '@shared/hooks';
import { generateFarmId } from '@shared/lib/generators/id';
import { Card } from '@shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer, PageHeader, Section, Subtitle, Title } from './FarmFormPage.styles';

export const FarmFormPage = () => {
  const { id, farmId } = useParams<{ id: string; farmId: string }>();
  const navigate = useNavigate();
  const { getProducerById, addFarm, updateFarm } = useProducers();

  const producer = id ? getProducerById(id) : null;
  const existingFarm = producer && farmId ? producer.farms.find((f) => f.id === farmId) : null;
  const isEditing = !!existingFarm;

  if (!producer) {
    return (
      <PageContainer>
        <Title>Produtor não encontrado</Title>
      </PageContainer>
    );
  }

  const handleSubmit = (values: FarmFormData) => {
    if (isEditing && existingFarm) {
      const updatedFarm: Farm = {
        ...existingFarm,
        ...values,
      };
      updateFarm(producer.id, updatedFarm);
    } else {
      const newFarm: Farm = {
        id: generateFarmId(),
        ...values,
      };
      addFarm(producer.id, newFarm);
    }
    navigate(`/produtores/${producer.id}/fazendas`);
  };

  const handleCancel = () => {
    navigate(`/produtores/${producer.id}/fazendas`);
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>{isEditing ? 'Editar Fazenda' : 'Nova Fazenda'}</Title>
        <Subtitle>
          Produtor: {producer.name} ({producer.documentType}: {producer.document})
        </Subtitle>
      </PageHeader>

      <Section>
        <Card>
          <FarmForm
            initialValues={
              existingFarm
                ? {
                    name: existingFarm.name,
                    city: existingFarm.city,
                    state: existingFarm.state,
                    totalArea: existingFarm.totalArea,
                    arableArea: existingFarm.arableArea,
                    vegetationArea: existingFarm.vegetationArea,
                    crops: existingFarm.crops,
                  }
                : undefined
            }
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </Card>
      </Section>
    </PageContainer>
  );
};
