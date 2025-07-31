local accountId = ARGV[1]
local minTs = tonumber(ARGV[2])

local accountKey = 'account:' .. accountId
local token, lastTs = unpack(
  redis.call('HMGET', accountKey,
    'enterWorldToken', 'enterWorldTokenTs'))

if token and lastTs then
  lastTs = tonumber(lastTs)
  if lastTs >= minTs then
    return { token }
  end
end

return nil
