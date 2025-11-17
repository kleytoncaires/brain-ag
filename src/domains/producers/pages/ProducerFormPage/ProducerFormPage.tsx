import type { Producer, ProducerFormData } from '@/types';
import { ProducerForm } from '@producers/components';
import { useProducers } from '@shared/hooks';
import { generateProducerId } from '@shared/lib/generators/id';
import { Card } from '@shared/ui';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer, PageHeader, Section, Subtitle, Title } from './ProducerForm.styles';

export const ProducerFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProducerById, addProducer, updateProducer } = useProducers();

  const existingProducer = id ? getProducerById(id) : null;
  const isEditing = !!existingProducer;

  const handleSubmit = (values: ProducerFormData) => {
    const producer: Producer = {
      id: existingProducer?.id || generateProducerId(),
      ...values,
      farms: existingProducer?.farms || [],
      createdAt: existingProducer?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (existingProducer) {
      updateProducer(producer);
    } else {
      addProducer(producer);
    }

    navigate('/produtores');
  };

  const handleCancel = () => {
    navigate('/produtores');
  };

  return (
    <PageContainer>
      <PageHeader>
        <Title>{isEditing ? 'Editar Produtor' : 'Novo Produtor'}</Title>
        <Subtitle>Preencha os dados do produtor rural</Subtitle>
      </PageHeader>

      <Section>
        <Card>
          <ProducerForm
            initialValues={
              existingProducer
                ? {
                    document: existingProducer.document,
                    documentType: existingProducer.documentType,
                    name: existingProducer.name,
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
