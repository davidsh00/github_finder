import Button from "../components/shared/FormElement/Button";
import CenterBox from "../components/shared/UIElement/CenterBox";

const HomePage = () => {
  return (
    <>
      <CenterBox>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl mb-8">Home Page</h1>
          <span>AVAILABLE SOON AS SOON POSSIBLE ...</span>
          <div className="flex gap-2 justify-center">
            <Button inverse to="/saved">Saved Users</Button>
            <Button inverse to="/search/users">
              Search User On Github
            </Button>
            
          </div>
            <Button  to="https://github.com/davidsh00">
           MY Github Page
            </Button>
        </div>
      </CenterBox>
    </>
  );
};
export default HomePage;
