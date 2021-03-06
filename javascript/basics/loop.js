// for, while 문은 다른 언어와 동일하다.

// 레이블(label)
// 중첩 loop을 한번에 빠져나와야 하는 경우 레이블을 사용한다.
let i = 0;
let j = 0
let k = 0;
outer: for (i; i < 3; i++) {
    for (j; j < 3; j++) {
        for (k; k < 10; k++) {
            if (k > 5) {
                break outer;    // outer label로 한번에 빠져나간다.
            }
        }
    }
}
console.log(i, j, k);     // 0, 0, 6 을 출력한다. 바깥 loop를 무시하고 한번에 레이블이 있는 곳으로 빠져나옴을 알 수 있다.

// 다만 레이블이 있는 곳으로 이동하는 명령은 아니다. 어셈블리의 JUMP와는 다름을 인지해야 한다.

// while문에서 pre, post를 통한 코드 구현. (for문에서는 ++i, i++ 둘다 같은 결과를 도출한다.)
i = 0;
while (++i < 5) console.log( i );   // 1, 2, 3, 4

i = 0;
// 후위 증가는 더하긴 하지만 이전값을 반환한다. 따라서 i 가 4일 때 5로 증가는 시키지만 4를 반환하여 5와 비교한다. 따라서 5 까지 출력이 된다.
while (i++ < 5) console.log( i );   // 1, 2, 3, 4, 5


i = 3;
while (i) console.log( i-- );

for (i = 2; i <= 10; i+=2) {
    console.log(i);
}