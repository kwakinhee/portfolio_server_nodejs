
local accountId, curTimeUtc, lastUserId, lastWorldAppId = unpack(ARGV)

local accountKey = 'account:' .. accountId

redis.call('HMSET', accountKey,
  'lastUserId', lastUserId,
  'lastWorldAppId', lastWorldAppId,
  'heartBeatTs', curTimeUtc)
