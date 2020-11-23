import { Game } from './game'

describe('.board', () => {
  test('should correctly output the intial cell configuration', () => {
    const startingBoard = [
      [0,0,0,1,0],
      [0,0,0,1,0],
      [1,0,0,0,0],
      [0,0,0,0,0],
      [0,0,1,1,0]
    ]
    expect(new Game(startingBoard).board).toBe(startingBoard)
  })
})

describe('step()', () => {
  test('when there is one live cell in the middle, and fewer than two live neighbours, it dies as if by underpopulation', () => {
    const startingBoard = [
      [0,0,0],
      [0,1,0],
      [0,0,0],
    ]
  
    const nextStepBoard = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is one live cell in the top-left, and fewer than two live neighbours, it dies as if by underpopulation', () => {
    const startingBoard = [
      [1,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]
  
    const nextStepBoard = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is one live cell in the top-middle, and two live neighbours, it lives on to the next generation', () => {
    const startingBoard = [
      [1,1,1],
      [0,0,0],
    ]
  
    const nextStepBoard = [
      [0,1,0],
      [0,1,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is one live cell in the top-middle, and three live neighbours, it lives on to the next generation', () => {
    const startingBoard = [
      [1,1,1],
      [0,1,0],
    ]
  
    const nextStepBoard = [
      [1,1,1],
      [1,1,1],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is one live cell in the middle, and four live neighbours, it dies as if by overpopulation', () => {
    const startingBoard = [
      [1,0,1],
      [1,1,1],
      [0,0,0],
    ]
  
    const nextStepBoard = [
      [1,0,1],
      [1,0,1],
      [0,1,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is one dead cell in the middle, and three live neighbours, it becomes live, as if by reproduction', () => {
    const startingBoard = [
      [1,0,1],
      [0,0,0],
      [0,0,1],
    ]
  
    const nextStepBoard = [
      [0,0,0],
      [0,1,0],
      [0,0,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
  
    expect(game.board).toEqual(nextStepBoard)
  })
  
  test('when there is a glider on the board, it moves', () => {
    const startingBoard = [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [1,0,1,0,0],
      [0,1,1,0,0],
      [0,0,0,0,0],
    ]
  
    const firstStepBoard = [
      [0,0,0,0,0],
      [0,1,0,0,0],
      [0,0,1,1,0],
      [0,1,1,0,0],
      [0,0,0,0,0],
    ]
  
    const secondStepBoard = [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,0,1,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
    ]
  
    const thirdStepBoard = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,1,0,1,0],
      [0,0,1,1,0],
      [0,0,1,0,0],
    ]
  
    const fourthStepBoard = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,1,0],
      [0,1,0,1,0],
      [0,0,1,1,0],
    ]
  
    const game = new Game(startingBoard)
  
    game.step()
    expect(game.board).toEqual(firstStepBoard)
  
    game.step()
    expect(game.board).toEqual(secondStepBoard)
  
    game.step()
    expect(game.board).toEqual(thirdStepBoard)
  
    game.step()
    expect(game.board).toEqual(fourthStepBoard)
  })
})