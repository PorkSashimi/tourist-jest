function sleep() {
  jest.setTimeout(1000);
}

function ResolveWithoutPromise(callback: Function) {
  sleep();
  callback();
  return;
}

function ResolveWithPromiseReject(callback: Function) {
  sleep();
  callback();
  return Promise.reject();
}

function ResolveWithPromiseResolve(callback: Function) {
  sleep();
  callback();
  return Promise.resolve();
}

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * Common
 * ---
 * @doc 需要使用 done 来显示的通知 jest 异步的结束回调
 * ---
 */
test('3.asyncchronous | Common Async', (done) => {
  function callback() {
    expect(1 + 1).toBe(3);
    done();
  }
  ResolveWithoutPromise(callback);
});

/**
 * Common With Error
 * ---
 * @doc expect 若 throw error 则不会执行 done 回调, 因此需要将 done 放到 catch 或者 finally
 * ---
 */
test('3.asyncchronous | Common Async With Error', (done) => {
  function callback() {
    try {
      expect(1 + 1).toBe(3);
    } finally {
      done();
    }
  }
  ResolveWithoutPromise(callback);
});

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * Promise
 * ---
 * @doc Promise 需要在 callback 结尾 return
 * ---
 */
test('3.asyncchronous | Promise', () => {
  function callback() {
    expect(1 + 1).toBe(2);
  }
  return ResolveWithPromiseResolve(callback);
});

/**
 * Promise Resolve
 * ---
 * @doc expect.resolve: 期望 Promise Resolve
 * ---
 */
test('3.asyncchronous | Promise Resolve', () => {
  function callback() {
    expect(1 + 1).toBe(2);
  }
  return expect(ResolveWithPromiseResolve(callback)).resolves.toBeUndefined();
});

/**
 * Promise Reject
 * ---
 * @doc expect.rejects: 期望 Promise Reject
 * ---
 */
test('3.asyncchronous | Promise Reject', () => {
  function callback() {
    expect(1 + 1).toBe(2);
  }
  return expect(ResolveWithPromiseReject(callback)).rejects.toBeUndefined();
});

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * Async | Await
 * ---
 * @doc 不需要 return 按照正常 async | await 方式使用即可
 * ---
 */
 test('3.asyncchronous | Async + Await', async () => {
  function callback() {
    expect(1 + 1).toBe(3);
  }
  await ResolveWithPromiseResolve(callback);
});