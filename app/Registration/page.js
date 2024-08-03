import RegisterForm from "../component/RegisterForm";
import Header from "../component/Header";
import Footer from "../component/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
