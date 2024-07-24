// import { beforeAll, describe, expect, test } from 'vitest';
// import { getCurrentAnimal, getData } from '../services/api';

// describe('Request search', () => {
//   let response: Response;
//   const json = getData('dog', { number: 1, size: 10 });
//   beforeAll(async () => {
//     response = await fetch(
//       'https://stapi.co/api/v1/rest/animal/search??pageNumber=1&name=dog',
//     );
//   }, 3000);

//   test('Should have response status 200', () => {
//     expect(response.status).toBe(200);
//   });
//   test('Should exist', () => {
//     expect(json).toBeTruthy();
//   });
// });

// describe('Request search', () => {
//   let response: Response;
//   const json = getCurrentAnimal('ANMA0000079699');
//   beforeAll(async () => {
//     response = await fetch(
//       'https://stapi.co/api/v1/rest/animal?uid=ANMA0000079699',
//     );
//   }, 3000);

//   test('Should have response status 200', () => {
//     expect(response.status).toBe(200);
//   });
//   test('Should exist', () => {
//     expect(json).toBeTruthy();
//   });
// });
