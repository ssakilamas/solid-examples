// -------------------------------
// Single responsibility principle
// -------------------------------

class Order {
  public void saveUserDetails(User user) {
    //...
  }

  public void performOrder(Order order) {
    //...
  }

  public void shipItem(Item item, String address) {
    // ...
  }
}

const saveUserDetails = (user) => { ... }
const performOrder = (order) => { ... }
const shipItem = (item, address) => { ... }

export { saveUserDetails, performOrder, shipItem };

// calling code
import { saveUserDetails, performOrder, shipItem } from "allActions";

// ---------------------
// Open-closed principle
// ---------------------

// library code

const saveRecord = (record, save, beforeSave, afterSave) => {
  const defaultSave = (record) => {
    // default save functionality
  }

  if (beforeSave) beforeSave(record);
  if (save) {
    save(record);
  }
  else {
    defaultSave(record);
  }
  if (afterSave) afterSave(record);
}

// calling code

const customSave = (record) => { ... }
saveRecord(myRecord, customSave);

// -----------------------------
// Liskov substitution principle
// -----------------------------

const isEven = (x: number): boolean => x % 2 == 0;
const isOdd = (x: number): boolean => x % 2 == 1;

const printFiltered = (arr: number[], filterFunc: (int) => boolean) => {
  arr.forEach((item) => {
    if (filterFunc(item)) {
      console.log(item);
    }
  })
}

const array = [1, 2, 3, 4, 5, 6];
printFiltered(array, isEven);
printFiltered(array, isOdd);

// -------------------------------
// Interface segregation principle
// -------------------------------

class PrintRequest {
  public void createRequest() { }
  public void deleteRequest() { }
  public void workOnRequest() { }
}

interface PrintRequestModifier {
  public void createRequest();
  public void deleteRequest();
}

interface PrintRequestWorker {
  public void workOnRequest()
}

class PrintRequest implements PrintRequestModifier, PrintRequestWorker {
  public void createRequest() { }
  public void deleteRequest() { }
  public void workOnRequest() { }
}

// ------------------------------
// Dependency inversion principle
// ------------------------------

interface Logger {
  public void write(String message);
}

class FileLogger implements Logger {
  public void write(String message) {
    // write to file
  }
}

class StandardOutLogger implements Logger {
  public void write(String message) {
    // write to standard out
  }
}

public void doStuff(Logger logger) {
  // do stuff
  logger.write("some message")
}
