import CustomButton from "./components/Button";
import { Button } from "component-library-mh-test-moh";
import TestArea from "./TestArea";
const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <main>
      <section>
        <CustomButton
          className="bg-green-500 hover:bg-yellow-300"
          onClick={handleClick}
        >
          fgdfg¯
        </CustomButton>
      </section>
      <TestArea>
        <Button
          className="bg-green-500 hover:bg-yellow-300"
          onClick={handleClick}
        >
          dsd dsdsdsdsd
        </Button>
      </TestArea>
    </main>
  );
};

export default App;
