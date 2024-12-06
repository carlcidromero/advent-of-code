# Day 1: Historian Hysteria

## Preliminary Notes

- Given a list, when processed, then it is provided in ascending order.
- Given a list, when processed, then its sum is provided.

```tsx
function difference(left: number[], right: number[]): number {
  let result = 0;
  for (let i = 0; i < left.length; i++) {
    result += Math.abs(left[i], right[i]);
  }
  return result;
}
```

# Reflection

This was my first time translating a coding problem into a "Given When Then" statement. It seemed pretty helpful. My naive implementation ended up being correct once the preliminary steps to splitting up the data into two lists was set up.

This was also my first time writing a coding problem solution in a style that is similar to my typical style -- very declarative and modular. Even though I could have comfortably implemented a more performant solution on my first attempt, it felt like the problem space was a bit more tangible after breaking it down so granularly.

Certainly this is a very simple problem. I have not done Advent Of Code before, but I imagine the difficulty will increase over time.

So far the little storyline is fun.
