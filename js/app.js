// Format System Old

const mongoose = {
  Schema: function (type) {
    return type;
  },
  model: function (modelName, modelType) {
    return class {
      constructor(data) {
        this.modelData = data;
      }

      save() {
        const objKey = Object.keys(this.modelData);
        const objValue = Object.values(this.modelData);
        const modelValue = Object.values(modelType);

        if (objKey.every((val) => val in modelType)) {
          let error = [];
          modelValue.map((val, index) => {
            if (objKey.length > index) {
              if (val.toLowerCase() == typeof objValue[index]) {
                error.push("ok");
              } else {
                error.push("err");
              }
            }
          });

          if (error.every((value) => value === "ok")) {
            console.log(this.modelData);
          } else {
            console.log(`Error: Your value is Invalid`);
          }
        } else {
          console.log(`Error: Object does not have property`);
        }
      }
    };
  },
};

const todoSchema = new mongoose.Schema({
  title: "String",
  description: "String",
  phone: "Number",
  active: "Boolean",
});
const todoTwoSchema = new mongoose.Schema({
  title: "String",
  active: "Boolean",
});

const Todo = new mongoose.model("Todo", todoSchema);
const TodoTwo = new mongoose.model("TodoTwo", todoTwoSchema);

const mytodo = new Todo({ title: "123", description: "hello" });
const mytodoTwo = new TodoTwo({ title: "123", active: false });

mytodo.save();
mytodoTwo.save();






// Format System ES6

// class Mongoose {
//   constructor() {
//     this.typeSchema;
//     this.modelName;
//     this.modelType;
//   }

//   Schema(type) {
//     this.typeSchema = type;
//     return this.typeSchema;
//   }
//   model(modelName, modelType) {
//     this.modelName = modelName;
//     this.modelType = modelType;
//     return class {
//       constructor(data) {
//         this.modelData = data;
//       }

//       save() {
//         const objKey = Object.keys(this.modelData);
//         const objValue = Object.values(this.modelData);
//         const modelValue = Object.values(modelType);

//         if (objKey.every((val) => val in modelType)) {
//           let error = [];
//           modelValue.map((val, index) => {
//             if (objKey.length > index) {
//               if (val.toLowerCase() == typeof objValue[index]) {
//                 error.push("ok");
//               } else {
//                 error.push("err");
//               }
//             }
//           });

//           if (error.every((value) => value === "ok")) {
//             console.log(this.modelData);
//           } else {
//             console.log(`Error: Your value is Invalid`);
//           }
//         } else {
//           console.log(`Error: Object does not have property`);
//         }
//       }
//     };
//   }
// }

// const todoSchema = new Mongoose().Schema({
//   title: "String",
//   description: "String",
//   phone: "Number",
//   active: "Boolean",
// });

// const todoTwoSchema = new Mongoose().Schema({
//   title: "String",
//   active: "Boolean",
// });

// const Todo = new Mongoose().model("Todo", todoSchema);
// const TodoTwo = new Mongoose().model("TodoTwo", todoTwoSchema);

// const mytodo = new Todo({ title: "123", description: "hello" });
// const mytodoTwo = new TodoTwo({ title: "123", active: "" });

// mytodo.save();
// mytodoTwo.save();
