import  Question  from '../components/Question'

function HomePage() {  
  return (
    <div style={{width: '100%'}} className="text-center">
      <Question title="Test1"></Question>
      <Question title="Test2"></Question>
      <Question title="Test3"></Question>
      <Question title="Test4"></Question>
    </div>
  );
}

export default HomePage;
