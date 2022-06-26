import create from 'zustand';
import { Story } from '../models/Story';

type StoryStore = {
	stories: Story[];
	loading: boolean;
	setStories: (stories: Story[]) => void;
	setLoading: (loading: boolean) => void;
};

export const useStoryStore = create<StoryStore>((set, get) => ({
	stories: [],
	loading: false,
	setStories: (stories) => set((state) => ({ ...state, stories })),
	setLoading: (loading: boolean) => set((state) => ({ ...state, loading }))
}));
