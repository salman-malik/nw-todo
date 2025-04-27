export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export type TodoFormData = {
  title: string;
  description?: string;
  priority: Priority;
};

export type TodoItem = {
  id: string;
  title: string;
  description: string | null;
  isCompleted: boolean;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
}; 