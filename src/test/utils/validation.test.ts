import { test, describe, expect } from 'vitest';
import validPosts from "../data/posts.test.valid.json";
import invalidPosts from "../data/posts.test.invalid.json";
import { isPost } from '$lib/utils/post';

describe('validation', () => {

  validPosts.forEach((post: unknown) => {
      test('returns a true when post valid', () => {
          expect(isPost(post)).toEqual(true);
      });
  });

  invalidPosts.forEach((post: unknown) => {
      test('returns a false when post invalid', () => {
          expect(isPost(post)).toEqual(false);
      });
  });

});
