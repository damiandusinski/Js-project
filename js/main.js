const times = document.querySelectorAll(".time");
const environments = document.querySelectorAll(".environment");

times.forEach(time => {
  time.addEventListener("click", () => {
    times.forEach(time => {
      time.classList.remove("active");
    });
    time.classList.add("active");
    console.log(time);
  });
});

environments.forEach(env => {
  env.addEventListener("click", () => {
    environments.forEach(env => {
      env.classList.remove("active");
    });
    env.classList.add("active");
    console.log(env);
  });
});
