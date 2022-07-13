export type Handler = (req: Request) => Response

export class BunRouter {
  public routerMap: Record<string, Handler>
  constructor(routerMap) {
    this.routerMap = routerMap
  }

  dispatch(api: string, req: Request): Response {
    return this.routerMap[api](req)
  }
}