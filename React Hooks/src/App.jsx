import ReducerHook from './Hooks/ReducerHook';
import FormData from './Hooks/ReducerFormData';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import LayoutExample from './Hooks/LayoutExample1';
import LayoutExamples from './Hooks/LayoutExample2';
import LayoutChat from './Hooks/LayoutChat';
import EffectEventHook from './Hooks/EffectEventHook';
import EffectEventForm from './Hooks/EffectEventForm';
import ActivityFeature from './Hooks/ActivityFeature';
import ToggleTest from './Hooks/ToogleTest';
import Greetings from './Greetings';
import GreetingsWithStyle from './GreetingwithStyle';
import FetchTest from './Hooks/FetchTest';
import FormTest from './Hooks/FormTest';
import WithDataPostList from './Hooks/WithDataPostList';
import WithAuthDashborad from './Hooks/WithAuthDashboard';
import RefHook from './Hooks/RefHook';
import FormStatus from './Hooks/FormStatus';
import TransitionButton from './Hooks/TransitionButton';
function App() {
  return (
    <>
      {/* UseReducer Hook ............ 
       <ReducerHook /> 
       <FormData /> 
       UseReducer Hook ............  */}
      {/* <UseLayoutEffect /> */}

      {/* UseLayoutEffect Hook..............
      <LayoutExample/>
      <LayoutExamples />
      <LayoutChat />
    UseLayoutEffect Hook.............. */}

      {/* UseEffectEvent Hook..............
       <EffectEventHook />
       <EffectEventForm />
    UseEffectEvent Hook.............. */}

      {/* Activity Feature in React ......... New in React
      <ActivityFeature />
       */}

      {/* Custom Hooks  
      <ToggleTest />
       <FetchTest />
      <FormTest />
      */}
      {/* Higher Order Components
          <Greetings name={'Yahoo Baba'} />
      <GreetingsWithStyle name={'Sanchit!'} />
      <WithDataPostList />
      <WithAuthDashborad />
      */}
      {/* UseRef Hook 
      <RefHook />
      */}
      {/* UseFormStatus Hook
      <FormStatus />
      */}
      <FormStatus />

      {/* UseTransition 
       <TransitionButton />
      */}
    </>
  );
}

export default App;
