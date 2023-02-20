export interface BaseEntity {
  id: string,
  createdOn: Date,
  updatedOn: Date,
  deletedOn?: Date | null,
}
