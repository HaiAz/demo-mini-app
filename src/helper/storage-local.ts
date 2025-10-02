const isWindVaneAvailable = (): boolean => {
  return !!window.WindVane;
};

const getItem = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isWindVaneAvailable()) {
      reject(new Error("Windvane not available"));
      return;
    }

    const params = { key };

    window.WindVane.call(
      "WVStorage",
      "getItem",
      params,
      (e: { data: string; ret: string }) => {
        console.log("🚀 ~ getItem ~ e:", e);
        try {
          const value = JSON.parse(e?.data);
          console.log("🚀 ~ getItem ~ value:", value);
          resolve(value);
        } catch {
          resolve(e.data);
        }
      },
      (error: any) => reject(error)
    );
  });
};

const setItem = (key: string, value: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!isWindVaneAvailable()) {
      reject(new Error("Windvane not available"));
      return;
    }

    const params = {
      key,
      value: typeof value === "string" ? value : JSON.stringify(value),
    };

    window.WindVane.call(
      "WVStorage",
      "setItem",
      params,
      (result: any) => resolve(result),
      (error: any) => reject(error)
    );
  });
};

export const storage = {
  getItem,
  setItem,
};
