local accountId = ARGV[1]
local minTs = tonumber(ARGV[2]) -- minimum timestamp value

local r = {
    ret = 0,
    lastUserId = nil,
    lastWorldAppId = nil
}

local accountKey = 'account:' .. accountId

local lastUserId, lastWorldAppId, lastTs = unpack(
  redis.call('HMGET', accountKey,
    'lastUserId',
    'lastWorldAppId',
    'heartBeatTs'))

if lastTs then
  if tonumber(lastTs) > minTs then
    r.ret = 1
    r.lastUserId = tonumber(lastUserId)
    r.lastWorldAppId = lastWorldAppId
  end
end

return cjson.encode(r)
