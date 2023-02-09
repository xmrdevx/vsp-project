import { IPageable } from "./pageable.interface";

export class Page<T> {
  public elements: T[];
  public totalElements: number;
  public totalPages: number;
  public current: IPageable;
  public next: IPageable;
  public previous: IPageable;

  constructor(elements: T[], totalElements: number, pageable: IPageable) {
    this.elements = elements;
    this.totalElements = totalElements;
    this.totalPages = Math.ceil(totalElements / pageable.getPageSize());
    this.current = pageable;
    this.next = pageable.next(totalElements);
    this.previous = pageable.previous(totalElements);
  }
}
