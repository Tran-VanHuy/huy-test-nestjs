export const Response = (statusCode: number, data: any, total?: number) => {

    return {
        statusCode,
        message: "SUCCESS",
        data,
        total
    }
}