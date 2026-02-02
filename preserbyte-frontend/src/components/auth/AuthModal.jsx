import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ open, onClose, type, setType }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold"
        >
          ✕
        </button>

        {type === "login" ? (
          <>
            <LoginForm />
            <p className="text-sm mt-4 text-center">
              No account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setType("register")}
              >
                Create Account
              </span>
            </p>
          </>
        ) : (
          <>
            <RegisterForm />
            <p className="text-sm mt-4 text-center">
              Already have account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setType("login")}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
