import { NotFoundException } from '@nestjs/common';
import { Entity, EntityId } from './entity.interface';
import { Document, Model } from 'mongoose';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<
  EntityType extends Entity<EntityId>,
  DocumentType extends Document
> implements Repository<EntityType> {

  protected constructor(
    protected readonly model: Model<DocumentType>,
    private readonly createEntity: (document: DocumentType) => EntityType
  ) {}

  protected createEntityFromDocument(document: DocumentType): EntityType | null {
    if (!document) {
      return null;
    }
    return this.createEntity(document.toObject({versionKey: false}));
  }

  public async find(id: EntityType['id']): Promise<EntityType | null> {
    const document = await this.model.findById(id).exec();
    return this.createEntityFromDocument(document);
  }

  public async save(entity: EntityType): Promise<EntityType> {
    const newEntity = new this.model(entity.toPlainObject());
    await newEntity.save();

    entity.id = newEntity._id.toString();

    return entity;
  }

  public async update(id: EntityType['id'], entity: EntityType): Promise<EntityType> {
    const updatedDocument = await this.model.findByIdAndUpdate(
      id,
      entity.toPlainObject(),
      { new: true, runValidators: true }
    ).exec();

    if (!updatedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    return entity
  }

  public async delete(id: EntityType['id']): Promise<void> {
    const deleteDocument = await this.model.findByIdAndDelete(id).exec();
    if (!deleteDocument) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
  }
}
