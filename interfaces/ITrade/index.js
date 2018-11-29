const ETInterface = require('../ETInterface')

class ITrade extends ETInterface {
  async AcceptOffer({ offerId }) {
    if (offerId === undefined) {
      throw new Error('offerId not specified!')
    }

    const url = this.getUrl() + 'AcceptOffer/v1'
    const twofactor_code = this.generateToken()
    const form = { twofactor_code, offer_id: offerId }
    const res = await this.request.post({ url, form })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response
  }

  async CancelOffer({ offerId }) {
    if (offerId === undefined) {
      throw new Error('offerId not specified!')
    }

    const url = this.getUrl() + 'CancelOffer/v1'
    const form = { offer_id: offerId }
    const res = await this.request.post({ url, form })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response.offer
  }

  async GetApps({}) {
    const url = this.getUrl() + 'GetApps/v1'

    const res = await this.request.get({ url })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response.apps
  }

  async GetOffer({ offerId }) {
    if (offerId === undefined) {
      throw new Error('offerId not specified!')
    }

    const url = this.getUrl() + 'GetOffer/v1'

    const res = await this.request.get({ url, qs: { offer_id: offerId } })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response.offer
  }

  async GetOffers({ uid, state, type, page = 1, perPage = 100, ids }) {
    const url = this.getUrl() + 'GetOffers/v1'

    const res = await this.request.get({ url, qs: { uid, state, type, page, per_page: perPage, ids } })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response
  }

  async GetTradeURL({}) {
    const url = this.getUrl() + 'GetTradeURL/v1'

    const res = await this.request.get({ url })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response
  }

  async GetUserInventory({ uid, appId, page = 1, perPage, search }) {
    if (uid === undefined) {
      throw new Error('uid not specified!')
    }
    if (appId === undefined) {
      throw new Error('appId not specified!')
    }

    const url = this.getUrl() + 'GetUserInventory/v1'

    const res = await this.request.get({ url, qs: { uid, app_id: appId, page, per_page: perPage, search } })

    if (!res.response) {
      throw new Error(res.message)
    }

    res.response.total_pages = res.total_pages
    res.response.current_page = res.current_page

    return res.response
  }

  async GetUserInventoryFromSteamId({ steamId, appId, page = 1, perPage, search }) {
    if (steamId === undefined) {
      throw new Error('steamId not specified!')
    }
    if (appId === undefined) {
      throw new Error('appId not specified!')
    }

    const url = this.getUrl() + 'GetUserInventoryFromSteamId/v1'

    const res = await this.request.get({ url, qs: { steam_id: steamId, app_id: appId, page, per_page: perPage, search } })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response
  }

  async RegenerateTradeUrl({}) {
    const url = this.getUrl() + 'RegenerateTradeUrl/v1'
    const res = await this.request.post({ url })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response
  }

  async SendOffer({ uid, token, itemsToSend, itemsToReceive, message, trade_url }) {
    if(trade_url === undefined){
      if (uid === undefined) {
        throw new Error('uid not specified!')
      }

      if (token === undefined) {
        throw new Error('token not specified!')
      }
    }

    if (itemsToSend === undefined) {
      throw new Error('itemsToSend not specified!')
    }

    if (itemsToReceive === undefined) {
      throw new Error('itemsToReceive not specified!')
    }

    const url = this.getUrl() + 'SendOffer/v1'
    const twofactor_code = this.generateToken()
    let form = { twofactor_code, items_to_send: itemsToSend.toString(), items_to_receive: itemsToReceive.toString(), message }
    if(uid && token){
      form.uid = uid;
      form.token = token;
    }else if(trade_url){
      form.trade_url = trade_url;
    }

    const res = await this.request.post({ url, form })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response.offer
  }

  async SendOfferToSteamId({ steamId, itemsToSend, itemsToReceive, message }) {
    if (steamId === undefined) {
      throw new Error('steamId not specified!')
    }

    if (itemsToSend === undefined) {
      throw new Error('itemsToSend not specified!')
    }

    if (itemsToReceive === undefined) {
      throw new Error('itemsToReceive not specified!')
    }

    const url = this.getUrl() + 'SendOfferToSteamId/v1'
    const twofactor_code = this.generateToken()
    const form = { twofactor_code, steam_id: steamId, items_to_send: itemsToSend.toString(), items_to_receive: itemsToReceive.toString(), message }
    const res = await this.request.post({ url, form })

    if (!res.response) {
      throw new Error(res.message)
    }

    return res.response.offer
  }

  getUrl() {
    return 'ITrade/'
  }
}

module.exports = ITrade
