import "bootstrap/dist/css/bootstrap.min.css";

export default function Csapat() {
    function myFunction(x) {
        x.classList.toggle("change");
      }
  return (
    <div className="csapatcontainer" onClick={myFunction(this)}>
      <div className="bar1"><a href=""></a></div>
      <div className="bar2"><a href=""></a></div>
      <div className="bar3"><a href=""></a></div>
    </div>
  );
}
