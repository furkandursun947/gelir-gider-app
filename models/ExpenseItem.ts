export interface ExpenseItem {
  title: string;
  description: string;
  price: number;
  date: Date;
  category: ExpenseCategoryEnum;
}

export enum ExpenseCategoryEnum {
  Food = 'Food',
  Housing = 'Housing',
  Entertainment = 'Entertainment',
  Clothing = 'Clothing',
  Transportation = 'Transportation',
  Utilities = 'Utilities',
  Tools = 'Tools',
  Bills = 'Bills',
  Other = 'Other',
}

