'use client'
import Header from "./component/Header";
import Footer from "./component/Footer";
import LoginForm from "./component/LoginForm";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex-grow items-center justify-center">
        <LoginForm/>
      </div>
      <Footer/>
    </main>
  );
};

export default HomePage;
