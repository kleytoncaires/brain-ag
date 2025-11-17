import type { Producer } from '@/types';
import { useProducers } from '@shared/hooks';
import { formatDocument } from '@shared/lib/formatters/document';
import { Button } from '@shared/ui/atoms';
import { useNavigate } from 'react-router-dom';
import {
  Actions,
  EmptyState,
  Header,
  ProducerCard,
  ProducerDetail,
  ProducerInfo,
  ProducerName,
  ProducersContainer,
  ProducersList,
  Title,
} from './ProducersList.styles';

export const ProducersListPage = () => {
  const navigate = useNavigate();
  const { producers, deleteProducer } = useProducers();

  const handleDelete = (id: string) => {
    if (window.confirm('Deseja realmente excluir este produtor?')) {
      deleteProducer(id);
    }
  };

  const handleEdit = (producer: Producer) => {
    navigate(`/produtores/editar/${producer.id}`);
  };

  return (
    <ProducersContainer>
      <Header>
        <Title>Produtores</Title>
        <Button size="small" onClick={() => navigate('/produtores/novo')}>
          Novo Produtor
        </Button>
      </Header>

      {producers.length === 0 ? (
        <EmptyState>
          <p>Nenhum produtor cadastrado.</p>
          <p>Clique em "Novo Produtor" para adicionar o primeiro.</p>
        </EmptyState>
      ) : (
        <ProducersList>
          {producers.map((producer) => (
            <ProducerCard key={producer.id}>
              <ProducerInfo>
                <ProducerName>{producer.name}</ProducerName>
                <ProducerDetail>
                  {producer.documentType}:{' '}
                  {formatDocument(producer.document, producer.documentType)}
                </ProducerDetail>
                <ProducerDetail>
                  {producer.farms.length} {producer.farms.length === 1 ? 'fazenda' : 'fazendas'}
                </ProducerDetail>
              </ProducerInfo>
              <Actions>
                <Button
                  size="small"
                  variant="secondary"
                  onClick={() => navigate(`/produtores/${producer.id}/fazendas`)}
                >
                  Fazendas
                </Button>
                <Button size="small" onClick={() => handleEdit(producer)}>
                  Editar
                </Button>
                <Button size="small" variant="danger" onClick={() => handleDelete(producer.id)}>
                  Excluir
                </Button>
              </Actions>
            </ProducerCard>
          ))}
        </ProducersList>
      )}
    </ProducersContainer>
  );
};
