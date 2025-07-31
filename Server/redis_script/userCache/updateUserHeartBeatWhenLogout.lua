
local accountId, curTimeUtc = unpack(ARGV)

local accountKey = 'account:' .. accountId

redis.call('HMSET', accountKey,
  'lastUserId', 0,
  'lastWorldAppId', '',
  'heartBeatTs', curTimeUtc)