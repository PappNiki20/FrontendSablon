import "bootstrap/dist/css/bootstrap.min.css";
export default function Csapat() {
    function myFunction(x) {
        x.classList.toggle("change");
      }
  return (
    <div class="container" onclick={myFunction(this)}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  );
}
