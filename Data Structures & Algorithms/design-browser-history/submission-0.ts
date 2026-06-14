class HistoryNode {
  public prev: HistoryNode | null;
  public value: string;
  public next: HistoryNode | null;

  constructor(value = "homepage", prev = null, next = null) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}


class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    private current: HistoryNode | null;

    constructor(homepage) {
      this.current = new HistoryNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
      const newNode = new HistoryNode(url);
      this.current.next = newNode;
      newNode.prev = this.current;
      this.current = newNode;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps: number) {
      for (let i = 0; i < steps && this.current.prev; i++) {
        this.current = this.current.prev;
      }

      return this.current.value;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps: number) {
      for (let i = 0; i < steps && this.current.next; i++) {
        this.current = this.current.next;
      }

      return this.current.value
    }
}
