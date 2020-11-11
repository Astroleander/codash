import { ListNode } from '@/pojo/LinkList';
import { Solution, INPUT_TYPE } from '@/pojo/Solution';

let addTwoNumbers = function (l1, l2) {
  let head = l1;

  let addon = 0;
  let val;

  while (l1) {
    val = l1.val + (l2 ? l2.val : 0) + addon;
    l1.val = val % 10;
    addon = ~~(val/10);

    if ((addon || l2 && l2.next) && !l1.next) {
      l1.next = new ListNode(0);
    }

    l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  return head;
}

let inputs = [
  /** 9465 */
  {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: {
          val: 9,
          next: null
        }
      }
    }
  },
  /** 642 */
  {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 6,
        next: null
      }
    }
  },
];
let inputs2 = [
{ val: 1, next: null},
{ val: 1, next: null},
// null,
// null
];

export default Solution.create(addTwoNumbers, inputs, {
  inputType: INPUT_TYPE.MUTABLE
})