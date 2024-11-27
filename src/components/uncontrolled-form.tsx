export const Form = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  // console.log("root", inputRef1);
  useEffect(() => {
    inputRef1.current.focus();
  }, []);
  const handleSubmit = () => {
    const inputValue1 = inputRef1.current.value;
    const inputValue2 = inputRef2.current.value;
    console.log(inputRef1, inputRef2);
    alert(JSON.stringify({ inputValue1, inputValue2 }));
    // Do something with the value
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef1} type="text" />
      <input ref={inputRef2} type="text" />
      <input type="submit" />
    </form>
  );
};
