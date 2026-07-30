function ErrorMessage({ message = "Bir hata oluştu." }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
      {message}
    </div>
  );
}

export default ErrorMessage;