export interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  location: string;
  speakers: string[];
};
