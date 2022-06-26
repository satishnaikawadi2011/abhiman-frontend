import create from 'zustand';
import { Story } from '../models/Story';

type StoryStore = {
	stories: Story[];
	setStories: (stories: Story[]) => void;
};

export const useStoryStore = create<StoryStore>((set, get) => ({
	stories: [],
	setStories: (stories) => set((state) => ({ ...state, stories }))
}));
