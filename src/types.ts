export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string; 
};

export interface Event {
  id: number;
  date: string;
  time: string;
  description: string;
  startTime: string;
  location: string;
};
