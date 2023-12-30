import { Entity, EntityId } from './entity.interface';

export interface Repository<T extends Entity<EntityId>> {
  find(id: T['id']): Promise<T> | null;
  save(entity: T): Promise<T>;
  update(id: T['id'], entity: T): Promise<T>;
  delete(id: T['id']): Promise<void>;
}
