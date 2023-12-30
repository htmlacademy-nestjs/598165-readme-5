import { randomUUID } from 'node:crypto';

import { Entity, EntityId } from './entity.interface';
import { Repository } from './repository.interface';

export abstract class BaseMemoryRepository<T extends Entity<EntityId>> implements Repository<T> {
  protected entities: Map<T['id'], T> = new Map();

  public async find(id: T['id']): Promise<T> | null {
    return this.entities.get(id) || null;
  }

  public async save(entity: T): Promise<T> {
    if (!entity.id) {
      entity.id = randomUUID();
    }
    this.entities.set(entity.id, entity);
    return entity;
  }

  public async delete(id: T["id"]): Promise<void> {
    this.entities.delete(id);
  }

  public async update(id: T["id"], entity: T): Promise<T> {
    if (!this.entities.has(id)) {
      throw new Error(`Entity with id ${id} not found`);
    }
    this.entities.set(id, {...entity, id});
    return entity;
  }
}
