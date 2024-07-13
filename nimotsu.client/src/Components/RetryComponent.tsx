async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 3000): Promise<T> {
    let lastError;

    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError;
}

export default retry;