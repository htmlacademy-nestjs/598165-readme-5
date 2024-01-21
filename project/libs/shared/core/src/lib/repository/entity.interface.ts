export type EntityId = string | number;

export interface Entity<T extends EntityId> {
  id?: T;
  toPlainObject(): Record<string, unknown>
}
