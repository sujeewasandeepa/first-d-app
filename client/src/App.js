function App() {
  return (
    <div class="container">
      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <h3>Greetings!</h3>
            <p>Contract Balance: 0</p>
          </div>
          <div class="col">
            <form>
              <div class="mb-3">
                <input type="number" class="form-control" placeholder="0" value="test" />
              </div>
              <button type="submit" class="btn btn-success">Deposit</button>
            </form>
            <form class="mt-5">
              <div class="mb-3">
                <input type="text" class="form-control" value="test" />
              </div>
              <button type="submit" class="btn btn-dark">Deposit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
