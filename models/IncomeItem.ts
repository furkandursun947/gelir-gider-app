export interface IncomeItem {
    title: string;
    description: string;
    price: number;
    date: Date;
    category: IncomeCategoryEnum
}

export enum IncomeCategoryEnum {
    Salary = 'Salary',
    Freelance = 'Freelance',
    Investment = 'Investment',
    Gift = 'Gift',
    Lottery = 'Lottery',
    Rental = 'Rental',
    Other = 'Other',
}

export enum IncomeCategoryIcons {
    Salary = 'briefcase',
    Freelance = 'briefcase',
    Investment = 'bank',
    Gift = 'gift',
    Lottery = 'ticket',
    Rental = 'house.fill',
    Other = 'questionmark.circle',
}