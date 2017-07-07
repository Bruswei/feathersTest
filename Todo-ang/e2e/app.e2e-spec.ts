import { TodoAngPage } from './app.po';

describe('todo-ang App', () => {
  let page: TodoAngPage;

  beforeEach(() => {
    page = new TodoAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
