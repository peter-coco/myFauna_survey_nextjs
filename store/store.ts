import create from 'zustand';

interface ContentState {
  surveyNo: number;
  surveyScore: number;
  addSurveyNo: () => void;
  calculateScore: (payload: number) => void;
}

const useStore = create<ContentState>((set) => ({
  surveyNo: 1,
  surveyScore: 0,
  addSurveyNo: () => set((state) => ({ surveyNo: state.surveyNo + 1 })),
  calculateScore: (payload: number) =>
    set((state) => ({ surveyScore: state.surveyScore + payload })),
}));

export default useStore;
